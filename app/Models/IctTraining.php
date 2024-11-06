<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class IctTraining extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable =[
        "rural_municipality_detail_id",
        "is_conducted_training", // boolean
        "reason_for_not_conducting",
        "total_no_of_training" ,
        "total_no_of_training_beneficiaries" ,
        "no_of_ict_training_lg_staffs" ,
        "total_beneficieries_lg_offices" ,
        "no_of_male_lg_officer" ,
        "no_of_female_lg_officer" ,
        "no_of_ict_disadvantage_groups" ,
        "no_of_benefecieries_disadvantage_groups" ,
        "no_of_male_disadvantage_group" ,
        "no_of_female_disadvantage_group" ,
        "no_of_ict_lg_school_or_clubs" ,
        "no_of_benefecieries_ict_lg_school_or_clubs" ,
        "no_of_male_ict_lg_school_or_clubs" ,
        "no_of_female_ict_lg_school_or_clubs" ,
        "no_of_ict_training_other_agencies" ,
        "no_of_benefecieries_ict_training_other_agencies" ,
        "no_of_male_ict_training_other_agencies" ,
        "no_of_female_ict_training_other_agencies" ,
        "have_being_using_fund_by_mofaga", // boolean
        "mention_amount_of_fund_in_training" ,
    ];
}
