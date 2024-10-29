<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StatusOFIctInfrastructure extends Model
{
    use HasUuids, SoftDeletes;

    protected $table="status_of_ict_infrastructures";
    protected $fillable = [
        "no_of_desktop",
        "no_of_laptop",
        "no_of_desktop_printer",
        "no_of_staff_use_compture_software",
    ];
}
