<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BagmatiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts = [
            // Districts of Bagmati Province in ascending order of label
            [
                "id" => Str::uuid(),
                "name_en" => "Sindhuli",
                "name_np" => "सिन्धुली",
                "province_label" => "p3",
                "label" => "dis23"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ramechhap",
                "name_np" => "रामेछाप",
                "province_label" => "p3",
                "label" => "dis24"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dolakha",
                "name_np" => "ढोलाखा",
                "province_label" => "p3",
                "label" => "dis25"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sindhupalchowk",
                "name_np" => "सिन्धुपाल्चोक",
                "province_label" => "p3",
                "label" => "dis26"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kavrepalanchok",
                "name_np" => "काभ्रेपलाञ्चोक",
                "province_label" => "p3",
                "label" => "dis27"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lalitpur",
                "name_np" => "ललितपुर",
                "province_label" => "p3",
                "label" => "dis28"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhaktapur",
                "name_np" => "भक्तपुर",
                "province_label" => "p3",
                "label" => "dis29"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kathmandu",
                "name_np" => "काठमाडौं",
                "province_label" => "p3",
                "label" => "dis30"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rasuwa",
                "name_np" => "रसुवा",
                "province_label" => "p3",
                "label" => "dis31"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nuwakot",
                "name_np" => "नुवाकोट",
                "province_label" => "p3",
                "label" => "dis32"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhading",
                "name_np" => "धादिङ",
                "province_label" => "p3",
                "label" => "dis33"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Makwanpur",
                "name_np" => "मकवानपुर",
                "province_label" => "p3",
                "label" => "dis34"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chitwan",
                "name_np" => "चितवन",
                "province_label" => "p3",
                "label" => "dis35"
            ],
        ];

        DB::table('districts')->insert($districts);
    }
}
