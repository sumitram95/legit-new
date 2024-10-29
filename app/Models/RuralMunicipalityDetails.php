<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RuralMunicipalityDetails extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'provider_name', //required
        'phone_no', //required
        'email', //required
        'province_label', //required
        'district_label', //required
        'local_government_lable', //required
        'position', //required
    ];
}
