import { GetStaticProps, InferGetStaticPropsType } from "next";
import { createSwaggerSpec } from "next-swagger-doc";
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic<any>(import("swagger-ui-react"), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next Swagger API for E-commerce App",
        version: "1.0",
        description:
          "API documentation for the E-commerce app built with Next.js"
      },
      paths: {
        "/api/health": {
          get: {
            tags: ["Health Check"],
            summary: "Health Check",
            description: "Check the health status of the environment.",
            parameters: [
              {
                name: "N/A",
                in: "N/A",
                description: "This endpoint does not accept any parameters."
              }
            ],
            responses: {
              "200": {
                description: "Environment is healthy",
                content: {
                  "application/json": {
                    example: {
                      status: "OK",
                      message: "The environment is healthy."
                    }
                  }
                }
              }
            }
          }
        },
        "/products": {
          get: {
            tags: ["Products"],
            summary: "Get list of products",
            description: "Retrieve a list of products available in the store.",
            parameters: [
              {
                name: "N/A",
                in: "N/A",
                description: "This endpoint does not accept any parameters."
              }
            ],
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    example: [
                      {
                        id: 1,
                        title: "Product 1",
                        price: "$100",
                        category: "Category A",
                        description: "Description of Product 1",
                        image: "product1.jpg"
                      },
                      {
                        id: 2,
                        title: "Product 2",
                        price: "$150",
                        category: "Category B",
                        description: "Description of Product 2",
                        image: "product2.jpg"
                      }
                    ]
                  }
                }
              },
              "400": {
                description: "Bad Request"
              }
            }
          }
        },
        "/products/{id}": {
          get: {
            tags: ["Products"],
            summary: "Get product by ID",
            description: "Retrieve details of a specific product by its ID.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "ID of the product",
                required: true,
                schema: {
                  type: "integer"
                }
              }
            ],
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    example: {
                      id: 1,
                      title: "Product 1",
                      price: "$100",
                      category: "Category A",
                      description: "Description of Product 1",
                      image: "product1.jpg"
                    }
                  }
                }
              },
              "404": {
                description: "Product not found"
              }
            }
          }
        },
        "/sort-products": {
          get: {
            tags: ["Products"],
            summary: "Sort list of Products",
            description: "Sort the list of products based on a given criteria.",
            parameters: [
              {
                name: "sort",
                in: "query",
                description: "Sort order (asc or desc)",
                required: false,
                schema: {
                  type: "string",
                  enum: ["asc", "desc"]
                }
              }
            ],
            responses: {
              "200": {
                description: "Sorted products list",
                content: {
                  "application/json": {
                    example: [
                      {
                        id: 30,
                        title: "Product 1",
                        price: "$100",
                        category: "Category A",
                        description: "Description of Product 1",
                        image: "product1.jpg"
                      },
                      {
                        id: 1,
                        title: "Product 2",
                        price: "$100",
                        category: "Category A",
                        description: "Description of Product 1",
                        image: "product1.jpg"
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "/add-product": {
          post: {
            tags: ["Products"],
            summary: "Add a new product",
            description: "Add a new product to the store.",
            parameters: [
              {
                name: "N/A",
                in: "N/A",
                description: "This endpoint does not accept any parameters."
              }
            ],
            requestBody: {
              content: {
                "application/json": {
                  example: {
                    title: "Test Product",
                    price: 13.5,
                    description: "Lorem ipsum set",
                    image: "https://i.pravatar.cc",
                    category: "Electronic"
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Product added successfully",
                content: {
                  "application/json": {
                    example: {
                      id: 31,
                      title: "Test Product",
                      price: 13.5,
                      category: "Electronic",
                      description: "Lorem ipsum set",
                      image: "https://i.pravatar.cc"
                    }
                  }
                }
              }
            }
          }
        },
        "/update-product/{id}": {
          put: {
            tags: ["Products"],
            summary: "Update a product (PUT)",
            description: "Update an existing product using the PUT method.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "ID of the product to update",
                required: true,
                schema: {
                  type: "integer"
                }
              }
            ],
            requestBody: {
              content: {
                "application/json": {
                  example: {
                    title: "New Title",
                    price: 13.5,
                    description: "New Description",
                    image: "https://i.pravatar.cc",
                    category: "New Category"
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Product updated successfully",
                content: {
                  "application/json": {
                    example: {
                      id: 7,
                      title: "New Title",
                      price: 13.5,
                      category: "New Category",
                      description: "New Description",
                      image: "https://i.pravatar.cc"
                    }
                  }
                }
              }
            }
          }
        },
        "/delete-product/{id}": {
          delete: {
            tags: ["Products"],
            summary: "Delete a product",
            description: "Delete an existing product using the DELETE method.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "ID of the product to delete",
                required: true,
                schema: {
                  type: "integer"
                }
              }
            ],
            responses: {
              "200": {
                description: "Product deleted successfully",
                content: {
                  "application/json": {
                    example: {
                      id: 6,
                      title: "...",
                      price: "...",
                      category: "...",
                      description: "...",
                      image: "..."
                    }
                  }
                }
              }
            }
          }
        },
        "/carts": {
          get: {
            tags: ["Carts"],
            summary: "Get all carts",
            description: "Retrieve a list of all carts.",
            parameters: [
              {
                name: "N/A",
                in: "N/A",
                description: "This endpoint does not accept any parameters."
              }
            ],
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    example: [
                      {
                        id: 1,
                        userId: 1,
                        date: "2020-10-10",
                        products: [
                          { productId: 2, quantity: 4 },
                          { productId: 1, quantity: 10 },
                          { productId: 5, quantity: 2 }
                        ]
                      },
                      {
                        id: 2,
                        userId: 10,
                        date: "2019-10-10",
                        products: [
                          { productId: 1, quantity: 5 },
                          { productId: 5, quantity: 1 }
                        ]
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "/carts/{id}": {
          get: {
            tags: ["Carts"],
            summary: "Get a single cart",
            description: "Retrieve details of a specific cart by its ID.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "ID of the cart",
                required: true,
                schema: {
                  type: "integer"
                }
              }
            ],
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    example: {
                      id: 5,
                      userId: 1,
                      date: "2022-08-31",
                      products: [
                        { productId: 2, quantity: 4 },
                        { productId: 1, quantity: 10 },
                        { productId: 5, quantity: 2 }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "/user-carts/{userId}": {
          get: {
            tags: ["Carts"],
            summary: "Get user carts",
            description: "Retrieve carts of a specific user.",
            parameters: [
              {
                name: "userId",
                in: "path",
                description: "ID of the user",
                required: true,
                schema: {
                  type: "integer"
                }
              },
              {
                name: "startDate",
                in: "query",
                description: "Start date of date range (YYYY-MM-DD)",
                schema: {
                  type: "string",
                  format: "date"
                }
              },
              {
                name: "endDate",
                in: "query",
                description: "End date of date range (YYYY-MM-DD)",
                schema: {
                  type: "string",
                  format: "date"
                }
              }
            ],
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    example: [
                      {
                        id: 5,
                        userId: 2,
                        date: "2019-10-03",
                        products: [
                          { productId: 2, quantity: 4 },
                          { productId: 1, quantity: 10 },
                          { productId: 5, quantity: 2 }
                        ]
                      },
                      {
                        id: 6,
                        userId: 2,
                        date: "2020-10-10",
                        products: [
                          { productId: 2, quantity: 4 },
                          { productId: 1, quantity: 10 },
                          { productId: 5, quantity: 2 }
                        ]
                      }
                    ]
                  }
                }
              },
              "404": {
                description: "User carts not found"
              }
            }
          }
        },
        "/sort-carts": {
          get: {
            tags: ["Carts"],
            summary: "Sort carts",
            description: "Sort the list of carts based on a given criteria.",
            parameters: [
              {
                name: "sort",
                in: "query",
                description: "Sort order (asc or desc)",
                required: false,
                schema: {
                  type: "string",
                  enum: ["asc", "desc"]
                }
              }
            ],
            responses: {
              "200": {
                description: "Sorted carts list",
                content: {
                  "application/json": {
                    example: [
                      {
                        id: 20,
                        userId: 1,
                        date: "2020-02-03",
                        products: [
                          { productId: 2, quantity: 4 },
                          { productId: 1, quantity: 10 },
                          { productId: 5, quantity: 2 }
                        ]
                      },
                      {
                        id: 1,
                        userId: 1,
                        date: "2020-02-05",
                        products: [
                          { productId: 2, quantity: 4 },
                          { productId: 1, quantity: 10 },
                          { productId: 5, quantity: 2 }
                        ]
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "/add-cart": {
          post: {
            tags: ["Carts"],
            summary: "Add a new product to cart",
            description: "Add a new product to a cart using the POST method.",
            parameters: [
              {
                name: "N/A",
                in: "N/A",
                description: "This endpoint does not accept any parameters."
              }
            ],
            requestBody: {
              content: {
                "application/json": {
                  example: {
                    userId: 5,
                    date: "2020-02-03",
                    products: [
                      { productId: 5, quantity: 1 },
                      { productId: 1, quantity: 5 }
                    ]
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Product added to cart successfully",
                content: {
                  "application/json": {
                    example: {
                      id: 21,
                      userId: 5,
                      date: "2020-02-03",
                      products: [
                        { productId: 5, quantity: 1 },
                        { productId: 1, quantity: 5 }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "/update-cart/{id}": {
          put: {
            tags: ["Carts"],
            summary: "Update a cart (PUT)",
            description: "Update an existing cart using the PUT method.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "ID of the cart to update",
                required: true,
                schema: {
                  type: "integer"
                }
              }
            ],
            requestBody: {
              content: {
                "application/json": {
                  example: {
                    userId: 3,
                    date: "2019-12-10",
                    products: [{ productId: 1, quantity: 3 }]
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Cart updated successfully",
                content: {
                  "application/json": {
                    example: {
                      id: 7,
                      userId: 3,
                      date: "2019-12-10",
                      products: [{ productId: 1, quantity: 3 }]
                    }
                  }
                }
              }
            }
          }
        },
        "/delete-cart/{id}": {
          delete: {
            tags: ["Carts"],
            summary: "Delete a cart",
            description: "Delete an existing cart using the DELETE method.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "ID of the cart to delete",
                required: true,
                schema: {
                  type: "integer"
                }
              }
            ],
            responses: {
              "200": {
                description: "Cart deleted successfully",
                content: {
                  "application/json": {
                    example: {
                      id: 6,
                      userId: 5,
                      date: "2020-02-03",
                      products: [
                        { productId: 2, quantity: 4 },
                        { productId: 1, quantity: 10 },
                        { productId: 5, quantity: 2 }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "/users": {
          get: {
            tags: ["Users"],
            summary: "Get all users",
            description: "Retrieve a list of all users.",
            parameters: [
              {
                name: "N/A",
                in: "N/A",
                description: "This endpoint does not accept any parameters."
              }
            ],
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    example: [
                      {
                        id: 1,
                        email: "John@gmail.com",
                        username: "johnd",
                        password: "m38rmF$",
                        name: {
                          firstname: "John",
                          lastname: "Doe"
                        },
                        address: {
                          city: "kilcoole",
                          street: "7835 new road",
                          number: 3,
                          zipcode: "12926-3874",
                          geolocation: {
                            lat: "-37.3159",
                            long: "81.1496"
                          }
                        },
                        phone: "1-570-236-7033"
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "/users/{id}": {
          get: {
            tags: ["Users"],
            summary: "Get a single user",
            description: "Retrieve details of a specific user by their ID.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "ID of the user",
                required: true,
                schema: {
                  type: "integer"
                }
              }
            ],
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    example: {
                      id: 1,
                      email: "John@gmail.com",
                      username: "johnd",
                      password: "m38rmF$",
                      name: {
                        firstname: "John",
                        lastname: "Doe"
                      },
                      address: {
                        city: "kilcoole",
                        street: "7835 new road",
                        number: 3,
                        zipcode: "12926-3874",
                        geolocation: {
                          lat: "-37.3159",
                          long: "81.1496"
                        }
                      },
                      phone: "1-570-236-7033"
                    }
                  }
                }
              },
              "404": {
                description: "User not found"
              }
            }
          }
        },
        "/add-users": {
          post: {
            tags: ["Users"],
            summary: "Add a new user",
            description: "Add a new user to the system.",
            parameters: [
              {
                name: "N/A",
                in: "N/A",
                description: "This endpoint does not accept any parameters."
              }
            ],
            requestBody: {
              content: {
                "application/json": {
                  example: {
                    email: "John@gmail.com",
                    username: "johnd",
                    password: "m38rmF$",
                    name: {
                      firstname: "John",
                      lastname: "Doe"
                    },
                    address: {
                      city: "kilcoole",
                      street: "7835 new road",
                      number: 3,
                      zipcode: "12926-3874",
                      geolocation: {
                        lat: "-37.3159",
                        long: "81.1496"
                      }
                    },
                    phone: "1-570-236-7033"
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "User added successfully",
                content: {
                  "application/json": {
                    example: {
                      id: 21,
                      email: "John@gmail.com",
                      username: "johnd",
                      password: "m38rmF$",
                      name: {
                        firstname: "John",
                        lastname: "Doe"
                      },
                      address: {
                        city: "kilcoole",
                        street: "7835 new road",
                        number: 3,
                        zipcode: "12926-3874",
                        geolocation: {
                          lat: "-37.3159",
                          long: "81.1496"
                        }
                      },
                      phone: "1-570-236-7033"
                    }
                  }
                }
              }
            }
          }
        },

        "/update-users/{id}": {
          put: {
            tags: ["Users"],
            summary: "Update a user",
            description: "Update an existing user's information.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "ID of the user to update",
                required: true,
                schema: {
                  type: "integer"
                }
              }
            ],
            requestBody: {
              content: {
                "application/json": {
                  example: {
                    email: "John@gmail.com",
                    username: "johnd",
                    password: "m38rmF$",
                    name: {
                      firstname: "John",
                      lastname: "Doe"
                    },
                    address: {
                      city: "kilcoole",
                      street: "7835 new road",
                      number: 3,
                      zipcode: "12926-3874",
                      geolocation: {
                        lat: "-37.3159",
                        long: "81.1496"
                      }
                    },
                    phone: "1-570-236-7033"
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "User updated successfully",
                content: {
                  "application/json": {
                    example: {
                      id: 7,
                      email: "John@gmail.com",
                      username: "johnd",
                      password: "m38rmF$",
                      name: {
                        firstname: "John",
                        lastname: "Doe"
                      },
                      address: {
                        city: "kilcoole",
                        street: "7835 new road",
                        number: 3,
                        zipcode: "12926-3874",
                        geolocation: {
                          lat: "-37.3159",
                          long: "81.1496"
                        }
                      },
                      phone: "1-570-236-7033"
                    }
                  }
                }
              }
            }
          },

          delete: {
            tags: ["Users"],
            summary: "Delete a user",
            description: "Delete an existing user from the system.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "ID of the user to delete",
                required: true,
                schema: {
                  type: "integer"
                }
              }
            ],
            responses: {
              "200": {
                description: "User deleted successfully",
                content: {
                  "application/json": {
                    example: {
                      id: 6,
                      email: "John@gmail.com",
                      username: "johnd",
                      password: "m38rmF$",
                      name: {
                        firstname: "John",
                        lastname: "Doe"
                      },
                      address: {
                        city: "kilcoole",
                        street: "7835 new road",
                        number: 3,
                        zipcode: "12926-3874",
                        geolocation: {
                          lat: "-37.3159",
                          long: "81.1496"
                        }
                      },
                      phone: "1-570-236-7033"
                    }
                  }
                }
              }
            }
          }
        }
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
          }
        }
      },
      security: []
    }
  });

  return {
    props: {
      spec
    }
  };
};

export default ApiDoc;
