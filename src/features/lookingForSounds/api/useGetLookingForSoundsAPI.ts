import useSWR from "swr";

export type Sound = {
  body: string;
  email: string;
  id: string;
  name: string;
  postId: string;
};

export type getLookingForSoundsReturns = {
  sounds?: Sound[];
  error: any;
  isLoading: boolean;
};

const getLookingForSounds = () =>
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) =>
    res.json()
  );

export const useLookingForSoundsAPI = (): getLookingForSoundsReturns => {
  const { data, error, isLoading } = useSWR(
    "/api/user/123",
    getLookingForSounds
  );

  return { sounds: data, error, isLoading };
};
