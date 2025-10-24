-- CreateTable
CREATE TABLE "example" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "document_number" TEXT NOT NULL,

    CONSTRAINT "example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "measurement" (
    "id" SERIAL NOT NULL,
    "unit_of_measure" TEXT NOT NULL,
    "gross" DOUBLE PRECISION NOT NULL,
    "net" DOUBLE PRECISION NOT NULL,
    "tare" DOUBLE PRECISION NOT NULL,
    "weight_stable" BOOLEAN NOT NULL,
    "center_of_zero" BOOLEAN NOT NULL,
    "overload" BOOLEAN NOT NULL,
    "underload" BOOLEAN NOT NULL,
    "tare_mode" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "measurement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "example_email_key" ON "example"("email");
