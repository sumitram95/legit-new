<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes, HasUuids;

    protected $fillable = [
        'title',
        'category_id',
        'policy_tracker_id',
        'upload_date',
        'description',
    ];

    public function thumbnail()
    {
        return $this->hasOne(Thumbnail::class);
    }

    public function newsFutureImage()
    {
        return $this->hasOne(NewsFutureImage::class);
    }

    public function status()
    {
        return $this->hasOne(Status::class, 'id', 'category_id');
    }

    public function policyTracker()
    {
        return $this->belongsTo(AiPolicyTracker::class, 'policy_tracker_id');
    }
}
