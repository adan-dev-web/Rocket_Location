import request, { gql } from "graphql-request";

export const getCarList = async () => {
  const query = gql`
    query cardList {
      carLists {
        createdAt
        publishedAt
        places
        price
        name
        marque
        id
        image {
          url
        }
        typeBoite
        type
        updatedAt
      }
    }
  `;
  const result = await request(
    "https://eu-west-2.cdn.hygraph.com/content/cmfzdhlib03cy07w40mloysao/master",
    query
  );
  return result;
};
