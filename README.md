## Food order api

## Project Structure

food-order-backend/
├── src/
│   ├── controllers/    # Controllers for handling API requests
│   │   ├── AdminController.ts  # Example controller for Admin
│   │   ├── Vendorsontroller.ts  # Example controller for Vendors
│   │   ├── CustomerController.ts  # Example controller for customers
│   │   └── ...                     # Add controllers for other functionalities
│   ├── dtos/            # Data Transfer Objects for request/response data
│   │   ├── Auth.dto.ts       # Example DTO for Authentication
│   │   ├── Customer.dto.ts       #  DTO for updating customers
│   │   ├── Food.dto.ts       # DTO for filtering food
│   │   ├── Vendor.dto.ts        #  DTO for Vendor data
│   │   └── ...                     # Add DTOs for other entities
│   ├── middlewares/     # Middleware functions for handling cross-cutting concerns
│   │   ├── CommonAuthMiddleware.ts      # Example middleware for authentication
│   │   ├── ErrorHandlerMiddleware.ts  # Example middleware for error handling
│   │   └── ...                     # Add middlewares for other functionalities
│   ├── models/          # Data models for entities like orders, restaurants, menus
│   │   ├── Order.ts                 #  model for orders
│   │   ├── Customer.ts             # model for Customers
│   │   └── Vendor.ts                  #  model for Vendors
│   ├── services/       # Business logic for data manipulation (optional)
│   │   └── Database && ExpressApp          #  services 
│   ├── utils/          # Utility functions for common tasks
│   │   └── PasswordUtility.ts     # Add utility functions for common operations
│   └── index.ts        # Main entry point for the application
├── middlewares.ts       # Global middleware configuration (optional)
├── routes.ts            # Main routing configuration
├── package.json        # Project dependencies and configuration
├── tsconfig.json       # TypeScript compiler configuration
├── .config               # Environment variables (optional)
└── .gitignore                # Other configuration files (optional)
├── images/             # Directory for storing uploaded images (optional)
