export default interface FileReader<FileType> {
  read(filePath: string): Promise<FileType>;
}
