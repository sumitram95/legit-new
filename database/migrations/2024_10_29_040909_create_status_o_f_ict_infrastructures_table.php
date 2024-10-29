<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('status_of_ict_infrastructures', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('no_of_desktop');
            $table->string('no_of_laptop');
            $table->string('no_of_desktop_printer');
            $table->string('no_of_staff_use_compture_software');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('status_o_f_ict_infrastructures');
    }
};
