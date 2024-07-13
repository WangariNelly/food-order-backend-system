import { VendorPayload } from "./Vendor.dtos";
import { CustomerPayload } from "./Customer.dto";

export type AuthPayload = VendorPayload | CustomerPayload;