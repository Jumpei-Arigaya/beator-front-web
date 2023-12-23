import useSWR from "swr";

export type Sound = {
  body: string;
  email: string;
  id: string;
  name: string;
  postId: string;
};

export type GetLookingForSoundsReturns = {
  sounds?: Sound[];
  error: Error;
  isLoading: boolean;
};

const getLookingForSounds = () =>
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) =>
    res.json()
  );

export const useLookingForSoundsAPI = (): GetLookingForSoundsReturns => {
  const { data, error, isLoading } = useSWR(
    "/api/user/123",
    getLookingForSounds
  );

  return { sounds: data, error, isLoading };
};
