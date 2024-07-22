## Food order api

## Project Structure

food-order-backend/
    ├── src/
    │   ├── controllers/
    │   │   ├── AdminController.ts
    │   │   ├── VendorController.ts  # Consistent naming for controllers
    │   │   ├── CustomerController.ts
    │   │   └── ...
    │   ├── dtos/
    │   │   ├── Auth.dto.ts
    │   │   ├── Customer.dto.ts
    │   │   ├── Food.dto.ts
    │   │   ├── Vendor.dto.ts
    │   │   └── ...
    │   ├── middlewares/
    │   │   ├── CommonAuthMiddleware.ts
    │   │   ├── ErrorHandlerMiddleware.ts
    │   │   └── ...
    │   ├── models/
    │   │   ├── Order.ts
    │   │   ├── Customer.ts
    │   │   └── Vendor.ts
    │   ├── services/
    │   │   └── Database.ts  # Separate files for better organization
    │   │       └── ExpressApp.ts
    │   ├── utils/
    │   │   └── PasswordUtility.ts
    │   └── index.ts
    ├── middlewares.ts  # Optional
    ├── routes.ts
    ├── package.json
    ├── tsconfig.json
    ├── .env  # Optional
    └── .gitignore

# Optional directory
    └── images/
````