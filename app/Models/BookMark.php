<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BookMark extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'user_id',
        'ai_policy_tracker_id'
    ];
}
