<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ict_trainings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('rural_municipality_detail_id');

            $table->boolean('is_conducted_training');

            $table->longText('reason_for_not_conducting')->nullable()->default(null);
            $table->string('total_no_of_training')->nullable()->default(null);
            $table->string('total_no_of_training_beneficiaries')->nullable()->default(null);
            $table->string('no_of_ict_training_lg_staffs')->nullable()->default(null);
            $table->string('total_beneficieries_lg_offices')->nullable()->default(null);
            $table->string('no_of_male_lg_officer')->nullable()->default(null);
            $table->string('no_of_female_lg_officer')->nullable()->default(null);
            $table->string('no_of_ict_disadvantage_groups')->nullable()->default(null);
            $table->string('no_of_benefecieries_disadvantage_groups')->nullable()->default(null);
            $table->string('no_of_male_disadvantage_group')->nullable()->default(null);
            $table->string('no_of_female_disadvantage_group')->nullable()->default(null);
            $table->string('no_of_ict_lg_school_or_clubs')->nullable()->default(null);
            $table->string('no_of_benefecieries_ict_lg_school_or_clubs')->nullable()->default(null);
            $table->string('no_of_male_ict_lg_school_or_clubs')->nullable()->default(null);
            $table->string('no_of_female_ict_lg_school_or_clubs')->nullable()->default(null);
            $table->string('no_of_ict_training_other_agencies')->nullable()->default(null);
            $table->string('no_of_benefecieries_ict_training_other_agencies')->nullable()->default(null);
            $table->string('no_of_male_ict_training_other_agencies')->nullable()->default(null);
            $table->string('no_of_female_ict_training_other_agencies')->nullable()->default(null);
            $table->boolean('have_being_using_fund_by_mofaga')->nullable()->default(false);
            $table->string('mention_amount_of_fund_in_training')->nullable()->default(null);

            $table->softDeletes();

            $table->foreign('rural_municipality_detail_id')->references('id')->on('rural_municipality_details')->onDelete('cascade');

            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ict_trainings');
    }
};
