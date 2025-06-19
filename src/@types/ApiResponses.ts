import { IuserData } from "./ContextTypes";

export interface IgenTokenApiResp {
  result: string;
}

export interface IheApiResp {
  result: string;
}

export interface IappUpdateApiResp {
  result: {
    id: number;
    version: number;
    forceVersion: number;
    type: string;
    createdAt: string;
    updatedAt: string;
  };
}

// Subscription

export interface IcheckOperatorApiResp {
  result: { isOther: boolean; package: string };
}
export interface IsendOtpApiResp {
  result: string;
}

export interface IloginApiResp {
  result: number;
}

export interface IcheckUserApiResp {
  result: {
    active: boolean;
    sub_date: string;
  };
}

export interface ICategoriesApiResp {
  result: ICategoriesData[];
}

export interface ICategoriesData {
  id: number;
  title: string;
  image: string;
  icon: string;
  description: string;
}

// Partners

export interface IPartnersApiResp {
  result: IPartnerData[];
}

export interface IPartnerData {
  id: number;
  title: string;
  logo: string;
}
//Policies

export interface IPoliciesApiResp {
  result: IPolicyData[];
}

export interface IPolicyData {
  id: number;
  title: string;
  description: string;
  benefits: string;
  is_purchased: boolean;
  is_beneficiary: boolean;
  is_nominee: boolean;
  type: string;
  instructions: string | null;
}

export interface IPlan {
  id: number;
  title: string;
  charging: number;
  type: string;
  cover_benefit: number;
  description: string;
  sub_package: string;
}

// tnc
export interface ITncApiResp {
  result: string;
}

export interface IRelationData {
  id: number;
  title: string;
}

// userClaims
export interface IUserPolicyClaimsApiResp {
  result: IUserPolicyClaimData[];
}
export interface IUserPolicyClaimData {
  policy: IUserClaimsPolicy;
  partner: IPartner;
  claim: IclaimData;
}

export interface IclaimData {
  id: number;
  claimedAt: string;
  documents: [
    {
      title: string;
      url: string;
    }
  ];
  status: string;
  claim_ref: null | string;
  amount: number;
  description: null | string;
}

export interface IPartner {
  id: number;
  title: string;
  logo: string;
}

export interface IUserClaimsPolicy {
  id: number;
  title: string;
}

//UserClaimDetail

export interface IUserClaimDetailApiResp {
  result: IUserClaimDetailResult;
}

export interface IUserClaimDetailResult {
  partner: IUserClaimDetailPartner;
  policy: IUserClaimDetailPolicy;
  claim: IUserClaimDetailClaim;
}

export interface IUserClaimDetailClaim {
  id: number;
  claimedAt: Date;
  documents: Document[];
  status: string;
  description: null | string;
  claim_ref: null | string;
  amount: number;
}

export interface Document {
  title: string;
  url: string;
}

export interface IUserClaimDetailPartner {
  id: number;
  title: string;
  logo: string;
  uan: string;
}

export interface IUserClaimDetailPolicy {
  id: number;
  title: string;
  description: string;
  benefits: string;
  instructions: string;
  type: string;
  is_purchased: boolean;
  is_beneficiary: boolean;
  is_nominee: boolean;
}

//userPolicyNominee
export interface IuserPolicyNominee {
  result: IuserPolicyBenefData[];
}

export interface IuserPolicyBenefData {
  id: number;
  cnic: number;
  name: string;
  contact_number: number;
  relation_name: string;
  relation_id: number;
}

// userPolicyBeneficiaries
export interface IuserPolicyBeneficiariesApiResp {
  result: IuserPolicyBenefData[];
}
// make Claim && Update Claim
export interface ImakeClaim {
  result: ImakeClaimResult;
}
export interface ImakeClaimResult {
  id: number;
}
// userPolicies

export interface IuserPoliciesApiResp {
  result: IuserPolicyResultData[];
}

export interface IuserPolicyResultData {
  id: number;
  partner: IPartnerData;
  policy: IPolicyData;
  category: ICategoriesData;
  plan: IPlan;
  active: boolean;
  last_claim: null | IuserPoliciesLastClaim;
  purchased_at: string;
  purchased_number: string;
  payment_by: null | string;
  payment_mode: string;
  payment_up_to: null | string;
  is_paid: null | boolean;
}

export interface IuserAllPoliciesData {
  active: IuserPolicyResultData[];
  inactive: IuserPolicyResultData[];
}

export interface IuserPolicyData {
  isNominee: boolean;
  isBeneficiary: boolean;
  partner: IuserPoliciesPartner;
  lastClaim: IuserPoliciesLastClaim;
  coverBenefit: number;
  coverLimit: number;
  policy: IuserPolicies_Policy;
}

export interface IuserPoliciesLastClaim {
  id: number;
  claimedAt: string;
  documents: {
    title: string;
    url: string;
  }[];
  status: string;
  description: null;
}

export interface IuserPoliciesPartner {
  id: number;
  title: string;
  logo: string;
}

export interface IuserPolicies_Policy {
  title: string;
  purchasedAt: string;
  policyNumber: number;
  category: IuserPolicies_Category;
}

export interface IuserPolicies_Category {
  id: number;
  title: string;
  image: string;
  icon: string;
  description: string;
}

//Search

export interface ISearchApiResp {
  result: ISearchPartners[];
}

export interface ISearchPartners {
  id: number;
  title: string;
  logo: string;
  policies: IsearchedPoliciesData[];
}

export interface IsearchedPoliciesData extends IPolicyData {
  category: ICategoriesData;
}
// get Profile

export interface IgetProfileApiResp {
  result: {
    userId: number;
    name: string;
    gender: string;
    cnic: number;
    email: string;
    dob: string;
    profile_pic_url: string;
    residential_address: string;
  };
}

// checkUser
export interface IcheckUser {
  result: IcheckUserResult;
}
export interface IcheckUserResult {
  active: boolean;
  at: string;
}

// bankList

export interface IbankList {
  result: IbankListResult[];
}

export interface IbankListResult {
  id: number;
  title: string;
  logo: string;
}

// saveBankDetails
export interface IsaveBankDetails {
  result: string;
}

//getBankDetails

export interface IgetBankDetails {
  result: IgetBankDetailsResult;
}

export interface IgetBankDetailsResult {
  bankName: string;
  accountNumber: string;
}

// notification
export interface Inotification {
  result: InotificationResult[];
}

export interface InotificationResult {
  icon: string;
  id: number;
  text: string;
  type: string;
  title: string;
}

export interface InotificationData {
  id: number;
  text: string;
  title: string;
  icon: string;
}

// all Partners
export interface IallPartners {
  result: IallPartnersResult[];
}

export interface IallPartnersResult {
  title: string;
  logo: string;
  uan: string;
}

// Claim Detail
export interface IClaimDetailApiResponse {
  result: IClaimDetailDataApiResponse;
}

export interface IClaimDetailDataApiResponse {
  partner: IClaimDetailPartner;
  policy: IClaimDetailPolicy;
  claim: ICliam;
}

export interface IClaimDetailNominee {
  id: number;
  cnic: number;
  name: string;
  contactNumber: number;
  relationName: string;
}

export interface IClaimDetailDocument {
  title: string;
  url: string;
}

export interface IClaimDetailPartner {
  id: number;
  title: string;
  logo: string;
  uan: string;
}

export interface ICliam {
  id: number;
  claimedAt: Date;
  documents: IClaimDetailDocument[];
  status: string;
  description: string;
}
export interface IClaimDetailPolicy {
  id: 1;
  title: "product 1";
  description: "description";
  benefits: "benefits";
  type: "Takaful";
  is_purchased: null;
  is_beneficiary: true;
  is_nominee: true;
}

// export interface IClaimDetailCategory {
//   id: number;
//   title: string;
//   image: string;
//   icon: string;
//   description: string;
// }

export interface IGetBankApiResp {
  result: IGetBankData[];
}
export interface IGetBankData {
  id: number;
  title: string;
  logo: string;
}

export interface ISaveBankApiResp {
  result: string;
}
export interface IGetAccountApiResp {
  result: IGetAccountApiResult;
}

export interface IGetAccountApiResult {
  account_number: string;
  bank_id: number;
  user_id: number;
  bank_name: string;
}

//claim comments

export interface IClaimCommentsApiResp {
  result: IClaimCommentsResult[];
}
export interface IClaimCommentsResult {
  id: number;
  message: string;
  isRead: boolean;
  createdAt: string;
}
//cliam mark as read
export interface IMarkAsRead {
  result: string;
}

// deactivate Policy
export interface IDeactivatePurchase {
  result: string;
}
export interface ICheckUtmResp {
  result: {
    sf_utm: string;
    ad_network: string;
  }[];
}

export interface IPlanResp {
  result: {
    id: number;
    title: string;
    charging: number;
    type: string;
    description: string;
    cover_benefit: number;
    sub_package: string;
  };
}
export interface IsendOtp {
  result: string;
}
export interface IactivateLPPolicy {
  result: string;
}
export interface IheaderEnrichmentPolicy {
  result: string;
}
export interface IgetMetaDataAndFlow {
  result: {
    logo: string;
    benefits: string;
    price: number;
    source: string;
    cdff: string | null;
    bg_img_desktop: string;
    bg_img_mobile: string;
    art_work: string;
    show_benefits: boolean;
    plan_sub_package: string;
    price_type: string;
    partner_id: number;
    plan_id: number;
    msisdn: string | null;
    sub_package: string | null;
    fast_flow: boolean;
    isFastFlow: any;
  };
}
