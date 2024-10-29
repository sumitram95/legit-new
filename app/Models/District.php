<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\SoftDeletes;

class District extends Model
{
    use HasUuids, SoftDeletes;
    protected $fillable = [
        "name_en",
        "name_np",
        "province_label",
        "label"
    ];
}
