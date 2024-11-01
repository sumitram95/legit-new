<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class LocalGovernment extends Model
{
    use HasUuids, SoftDeletes;

    protected $appends = ['formatted_created_at'];
    protected $fillable = [
        "name_en",
        "name_np",
        "district_label",
        "label",
    ];

    public function district()
    {
        return $this->hasOne(District::class, 'label', 'district_label');
    }

    public function getFormattedCreatedAtAttribute()
    {
        return $this->created_at ? $this->created_at->format('d M Y') : null;
    }

    public function bookmark()
    {
        return $this->hasOne(BookMark::class, 'ai_policy_tracker_id', 'id')
            ->where('user_id', Auth::id());
    }

    public function bookmarks()
    {
        return $this->hasMany(BookMark::class, 'ai_policy_tracker_id', 'id');
    }


}
