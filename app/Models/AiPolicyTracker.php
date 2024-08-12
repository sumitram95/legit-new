<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AiPolicyTracker extends Model
{
    use SoftDeletes, HasUuids;

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
}
