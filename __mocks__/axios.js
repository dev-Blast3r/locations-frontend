const createMockFunction = () =>
  typeof jest !== "undefined" ? jest.fn() : () => {};

const axiosMock = {
  create: createMockFunction(() => axiosMock),
  get: createMockFunction(() =>
    Promise.resolve({
      data: [
        {
          code: "001",
          name: "Sede Norte",
          image: "https://via.placeholder.com/150",
          creationDate: "2024-01-01",
        },
        {
          code: "002",
          name: "Sede Sur",
          image: "https://via.placeholder.com/150",
          creationDate: "2024-01-02",
        },
      ],
    }),
  ),
};

export default axiosMock;
