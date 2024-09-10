<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Seeders\backend\CountrySeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Admin',
        //     'email' => 'admin@dignep.com.np',
        // ]);

        $this->call(CountrySeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(StatusSeeder::class);
        $this->call(AiPolicyTrackerSeeder::class);
    }
}
