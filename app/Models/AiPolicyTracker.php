<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;


class AiPolicyTracker extends Model
{
    use SoftDeletes, HasUuids;

    // Define a custom attribute for formatted creation date
    //note:- $appends property on a model allows you to include additional attributes in the model's JSON representation
    protected $appends = ['formatted_created_at'];
    protected $fillable =
    [
        "country_id",
        "status_id",
        "ai_policy_name",
        "governing_body",
        "announcement_year",
        "whitepaper_document_link",
        "technology_partners",
        "governance_structure",
        "main_motivation",
        "description",
    ];

    public function country(): HasOne
    {
        return $this->hasOne(Country::class, 'id', 'country_id');
    }


    public function status(): HasOne
    {
        return $this->hasOne(Status::class, 'id', 'status_id');
    }

    public function getFormattedCreatedAtAttribute()
    {
        return Carbon::parse($this->created_at)->format('M d, Y');
    }

    public function news()
    {
        return $this->hasMany(News::class, 'policy_tracker_id');
    }

    public function aIPolicyActivityLogs()
    {
        return $this->hasMany(AIPolicyActivityLog::class, 'ai_policy_tracker_id');
    }
}
