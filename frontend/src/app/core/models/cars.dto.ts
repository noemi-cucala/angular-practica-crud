export interface Cars {
  items: [
    {
      id: string,
      brand: {
        id: string,
        name: string
      },
      model: {
        id: string,
        name: string
      },
      total: number,
      imageUrl: string
    }
  ],
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean
  }
}
