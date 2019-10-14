import { gql } from 'apollo-server';

export const productTypes = gql`
  extend type Query {
    getLegacyProduct(productId: ID!): LegacyProduct
    getLegacyProducts(userId: ID!): [LegacyProduct]!
    getProduct(productId: ID!): Product!
    getProducts(userId: ID!): [Product]!
  }

  extend type Mutation {
    saveProduct(product: ProductInput!): Product!
  }

  extend type Subscription {
    productAdded(productId: ID!): Product
    productDeleted(productId: ID!): Product
  }

  type LegacyProduct {
    id: String
    approved: Boolean
    createdAt: String
    fulFillmentService: String
    handle: String
    inventoryManagement: String
    images: [Image]!
    isTaxable: Boolean
    isShipping: Boolean
    lastVariantPosition: Int
    lastImagePosition: Int
    option1: String
    option2: String
    option3: String
    price: String
    primaryImageUrl: String
    sellerId: [String]!
    status: String
    tags: [String]!
    title: String
    updatedAt: String
    variants: [Variant]!
    vendor: String
    vendorId: String
    vendorDiscount: VendorDiscount
    weightUnit: String
  }

  type Image {
    _id: String
    url: String
    position: Int
  }

  type VendorDiscount {
    price: Int
    type: String
  }

  type Variant {
    barcode: String
    comparePrice: Int
    customCharge: Int
    customLabel: String
    fulfillmentService: ProductService
    grams: Int
    image: String
    imageUrl: String
    imageId: String
    inventoryQuantity: Int
    inventoryManagement: ProductService
    inventoryPolicy: ProductService
    isTaxable: Boolean
    isShipping: Boolean
    price: Int
    position: Int
    option1: String
    option1Val: String
    option2: String
    option2Val: String
    option3: String
    option3Val: String
    quantity: Int
    sku: String
    title: String
    vendorDiscount: VendorDiscount
    vendorShopifyVariantId: Int
    vendorShopifyImageId: Int
    weight: Int
    weightUnit: ProductService
  }

  type ProductService {
    type: String
  }

  type Product {
    _id: String!
    name: String!
    ownerId: String!
    downloads: [DownLoads]!
    ecommercePlatform: EcommereceEnum!
  }

  enum EcommereceEnum {
    shopify,
    bigCommerce,
    wooCommerce
  }

  type DownLoads {
    fieldId: String!
    name: String!
    url: String!
  }

  input ProductInput {
    name: String!
    ownerId: String!
    ecommercePlatform: String!
    updatedBy: String!
    createdBy: String!
  }

  type ProductRes {
    productId: String!
  }
`;

