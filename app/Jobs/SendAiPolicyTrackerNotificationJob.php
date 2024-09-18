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
    protected $message;
    protected $method;
    public function __construct($aiPolicyTracker, $message,$method)
    {
        $this->aiPolicyTracker = $aiPolicyTracker;
        $this->message = $message;
        $this->method = $method; // method mean what function run (create,delete, update)
    }
    /**
     * Execute the job.
     */
    public function handle(): void
    {
        if ($this->method == 'create') {
            $users = User::whereNot('email', 'admin@dignep.com.np')->get(); // Exclude specific users if needed

            foreach ($users as $user) {
                $user->notify(new NewAiPolicyTrackerNotification($this->aiPolicyTracker, $user));
            }
        }

        if ($this->method == 'update') {
            $users = User::whereNot('email', 'admin@dignep.com.np')->get(); // Exclude specific users if needed


            foreach ($users as $user) {
                $user->notify(new NewAiPolicyTrackerNotification($this->aiPolicyTracker, $user, $this->message));
            }
        }

    }
}
