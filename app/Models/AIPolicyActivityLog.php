<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AIPolicyActivityLog extends Model
{
    use HasFactory;
    protected $fillable =
    [
        "user_id",
        "ai_policy_tracker_id",
        "activity_name",
        "description",
    ];
}
