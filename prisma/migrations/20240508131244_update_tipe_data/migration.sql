/*
  Warnings:

  - A unique constraint covering the columns `[nama_kategori]` on the table `Kategori` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nama_kota]` on the table `Kota` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Kategori_nama_kategori_key" ON "Kategori"("nama_kategori");

-- CreateIndex
CREATE UNIQUE INDEX "Kota_nama_kota_key" ON "Kota"("nama_kota");
