export interface Car {
  "id": string,
  "brand": {
    "id": string,
    "name": string
  },
  "model": {
    "id": string,
    "name": string
  },
  "carDetails": [
    {
      "registrationDate": string,
      "mileage": number,
      "currency": string,
      "price": number,
      "manufactureYear": number,
      "availability": boolean,
      "color": string,
      "description": string,
      "licensePlate": string,
      "imageUrl": string
    }
  ],
  "total": number
}
