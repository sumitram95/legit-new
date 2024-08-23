<?php

namespace App\Helpers\Logs;

use App\Models\AIPolicyActivityLog;
use Illuminate\Support\Facades\Auth;

class ActivityLogHelper
{
    /**
     * Create an activity log for a user.
     *
     * @param  string  $userAgent  The user agent string of the user's browser.
     * @param  string  $activityName  The name of the activity.
     * @param  string|null  $description  The description of the activity (optional).
     */
    public static function createActivityLog(
        string $activityName,
        ?string $description = null
    ): void {
        $authUser = Auth::user();

        if ($authUser) {
            AIPolicyActivityLog::create([
                'user_id' => $authUser->id,
                'activity_name' => $activityName,
                'description' => $description,
            ]);
        }
    }
}

