export interface IFileEntity {
    id: number;
    filename: string;
    original_filename: string;
    size: number;
    mime_type: string;
    private: boolean;
    deletedAt?: Date;
    user: unknown;
  }