"use client";

import { useState } from "react";
import { createClient } from "contentful";

const useContentfull = (query) => {
  let [data, setData] = useState([]);

  const client = createClient({
    space: "vcfknv96mifi",
    accessToken: "hlV0jADcGAzkudfoMFW8Bc6sXxY_rWy1y5uEYP1ZT5U",

    host: "preview.contentful.com",
  });

  const getData = async () => {
    try {
      const dataPosts = await client.getEntries({
        content_type: query,
        include: 5, // Include referenced author data
        select: "fields",
      });

      return dataPosts;
    } catch (error) {
      console.log(`Error fetching blogPosts: ${error}`);
    }
  };

  return { getData };
};

export default useContentfull;
