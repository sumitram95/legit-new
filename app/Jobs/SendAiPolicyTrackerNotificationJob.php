<?php

namespace App\Jobs;

use App\Models\User;
use App\Notifications\NewAiPolicyTrackerNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendAiPolicyTrackerNotificationJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    protected $aiPolicyTracker;
    public function __construct($aiPolicyTracker)
    {
        $this->aiPolicyTracker = $aiPolicyTracker;
    }
    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $users = User::whereNot('email', 'admin@dignep.com.np')->get(); // Exclude specific users if needed

        foreach ($users as $user) {
            $user->notify(new NewAiPolicyTrackerNotification($this->aiPolicyTracker, $user));
        }
    }
}
