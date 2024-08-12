<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AiPolicyTrackerPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "country_id" => "required|string|exists:countries,id",
            "status_id" => "required|string|exists:statuses,id",
            "ai_policy_name" => "sometimes|nullable|string",
            "governing_body" => "sometimes|nullable|string",
            "announcement_year" => "sometimes|nullable|date",
            "whitepaper_document_link" => "sometimes|nullable|string",
            "technology_partners" => "sometimes|nullable|string",
            "governance_structure" => "sometimes|nullable|string",
            "main_motivation" => "sometimes|nullable|string",
            "description" => "nullable",
        ];
    }
}
