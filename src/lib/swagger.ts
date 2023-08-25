import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next Swagger API for E-commerce App",
        version: "1.0"
      },

      paths: {
        "/products": {
          get: {
            tags: ["Products"],
            summary: "Get list of products",
            description: "Return a list of products",
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
                      /* ... more products ... */
                    ]
                  }
                }
              },
              "400": {
                description: "Bad Request"
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
  return spec;
};
