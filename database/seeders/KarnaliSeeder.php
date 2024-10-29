<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class KarnaliSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts = [
            // Districts of Karnali Province
            [
                "id" => Str::uuid(),
                "name_en" => "Surkhet",
                "name_np" => "सुर्खेत",
                "province_label" => "p6",
                "label" => "dis59",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dailekh",
                "name_np" => "दैलेख",
                "province_label" => "p6",
                "label" => "dis60",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jajarkot",
                "name_np" => "जाजरकोट",
                "province_label" => "p6",
                "label" => "dis61",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dolpa",
                "name_np" => "डोल्पा",
                "province_label" => "p6",
                "label" => "dis62",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jumla",
                "name_np" => "जुम्ला",
                "province_label" => "p6",
                "label" => "dis63",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kalikot",
                "name_np" => "कालिकोट",
                "province_label" => "p6",
                "label" => "dis64",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mugu",
                "name_np" => "मुगु",
                "province_label" => "p6",
                "label" => "dis65",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Humla",
                "name_np" => "हुम्ला",
                "province_label" => "p6",
                "label" => "dis66",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rukum (Western)",
                "name_np" => "रुकुम (पश्चिम)",
                "province_label" => "p6",
                "label" => "dis77",
            ],
        ];

        DB::table('districts')->insert($districts);
    }
}
