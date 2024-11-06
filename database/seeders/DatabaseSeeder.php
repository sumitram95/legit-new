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


        $this->call(ProvinceSeeder::class);
        // $this->call(DistrictSeeder::class);
        $this->call(KoshiSeeder::class); //p1
        $this->call(MadheshSeeder::class); //p2
        $this->call(BagmatiSeeder::class); //p3
        $this->call(GandakiSeeder::class); //p4
        $this->call(LumbiniSeeder::class); //p5
        $this->call(KarnaliSeeder::class); //p6
        $this->call(SudurpashchimSeeder::class); //p7

        // local government
        $this->call(LocalGovernmentSeeder::class);

        // fiscal year
        $this->call(FiscalYearSeeder::class);
    }
}
