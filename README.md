## Food order api

## Project Structure
````
food-order-backend/
    ├── src/
    │   ├── controllers/
    │   │   ├── AdminController.ts
    │   │   ├── VendorController.ts  
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
    │   │   └── Database.ts  
    │   │       └── ExpressApp.ts
    │   ├── utils/
    │   │   └── PasswordUtility.ts
    │   └── index.ts
    ├── middlewares.ts  
    ├── routes.ts
    ├── package.json
    ├── tsconfig.json
    ├── .config
    └── .gitignore

# Optional directory
    └── images/
````