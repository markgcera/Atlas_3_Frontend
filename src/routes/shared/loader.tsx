import resolveURL from "@/api/fetch.ts";


export const getResourceOptions = {
  queryKey: ['resourceData'],
  queryFn: () => fetch(resolveURL('/resource')).then((res) => res.json())
}
