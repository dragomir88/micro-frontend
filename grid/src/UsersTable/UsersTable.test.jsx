import { render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import UsersTable from "./UsersTable";

const mock = new MockAdapter(axios);

const queryClient = new QueryClient();

describe("UsersTable", () => {
  beforeEach(() => {
    mock.reset();
  });

  it("displays loading state initially", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UsersTable />
      </QueryClientProvider>
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("displays an error message if the fetch fails", async () => {
    mock.onGet("https://jsonplaceholder.typicode.com/users").networkError();

    render(
      <QueryClientProvider client={queryClient}>
        <UsersTable />
      </QueryClientProvider>
    );

    expect(
      await screen.findByText(/An error has occurred/)
    ).toBeInTheDocument();
  });

  it("displays the users once the data is fetched", async () => {
    const users = [{ id: 1, name: "John Doe", username: "johndoe" }];
    mock.onGet("https://jsonplaceholder.typicode.com/users").reply(200, users);

    render(
      <QueryClientProvider client={queryClient}>
        <UsersTable />
      </QueryClientProvider>
    );

    expect(await screen.findByText("John Doe")).toBeInTheDocument();
  });
});
