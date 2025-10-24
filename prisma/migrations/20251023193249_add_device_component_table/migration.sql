-- CreateTable
CREATE TABLE "device_component" (
    "id" SERIAL NOT NULL,
    "device_class" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "serial_number" TEXT NOT NULL,
    "software_revision" TEXT NOT NULL,
    "scale_type" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "increment" TEXT NOT NULL,
    "geo_code" INTEGER NOT NULL,
    "filter_environment" TEXT NOT NULL,
    "filter_limit_frequency" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "device_component_pkey" PRIMARY KEY ("id")
);
