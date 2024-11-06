<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RuralMunicipalityDetails extends Model
{
    use HasUuids, SoftDeletes;
    protected $appends = ['formatted_created_at'];
    protected $fillable = [
        'fiscal_year_id',
        'provider_name', //required
        'phone_no', //required
        'email', //required
        'province_label', //required
        'district_label', //required
        'local_government_lable', //required local_government_label
        'position', //required
    ];


    public function getFormattedCreatedAtAttribute()
    {
        return $this->created_at ? $this->created_at->format('d M Y') : null;
    }

    public function province()
    {
        return $this->hasOne(Province::class, 'label', 'province_label');
    }
    public function district()
    {
        return $this->hasOne(District::class, 'label', 'district_label');
    }
    public function lg()
    {
        return $this->hasOne(LocalGovernment::class, 'label', 'local_government_lable');
    }

    public function ictTraining()
    {
        return $this->hasOne(IctTraining::class, 'rural_municipality_detail_id', 'id');
    }
}
