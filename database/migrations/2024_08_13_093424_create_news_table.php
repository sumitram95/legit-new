<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('policy_tracker_id')->nullable(); // Foreign key column
            $table->uuid('category_id')->nullable(); // Category foreign key column
            $table->string('title');
            $table->longText('description')->nullable();
            $table->string('upload_date');

            // Foreign key constraint
            $table->foreign('policy_tracker_id')
                ->references('id')
                ->on('ai_policy_trackers')
                ->onDelete('set null');

            // Timestamps and soft deletes
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
}
