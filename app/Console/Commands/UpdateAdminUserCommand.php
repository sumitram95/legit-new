<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;


class UpdateAdminUserCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:admin-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info("Updating admin@dignep.com.np");
        User::updateOrCreate(
            ['email' => 'admin@dignep.com.np'],
            [
                'email_verified_at' => now(),
            ]
        );
        $this->info("Updated");
    }
}
