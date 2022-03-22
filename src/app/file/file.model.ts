export interface File{
  name: string,
  date: string,
  tags: Tag[],
  extension: string,
  fileName?: string,

}
export interface Tag{
  id: number,
  label: string,
}
