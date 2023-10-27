-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" VARCHAR(255) NOT NULL DEFAULT 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.webp?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504=',
ADD COLUMN     "name" VARCHAR(255) NOT NULL DEFAULT 'user';
