class Fake < ActiveRecord::Base

  def self.bids
    [
      { user_id: 1, min_bid: 13, created_at: 23432432 },
      { user_id: 3, min_bid: 12, created_at: 23432431 },
      { user_id: 2, min_bid: 11,  created_at: 23432452 }
    ]
  end

  def self.available_dobbies
    [
      { user_id: 1 },
      { user_id: 3 },
      { user_id: 2 }
    ]
  end

  def self.profiles
    [
      {
       firstName: 'Sankalp',
       lastName: 'Shere',
       overallRating: 3.32,
       numRatingsOverall: 10,
       numRatingsFromCustomers: 0,
       numRatingsFromDobbies: 9,
       city: 'Seattle',
       state: 'WA',
       verified: 'Yes',
       bgChecked: 'No',
       aboutMe: 'Specialization in delivery ',
       imageUrl: 'https://graph.facebook.com/sankalpshere/picture?height=75&width=75',
       availabilityStatus: 'On'
       references: [
         {
           firstName: 'Ankita',
           lastName: 'Chamela',
           imageUrl: 'https://graph.facebook.com/achowdhery/picture?height=75&width=75',
           overallRating: 5,
           numRatingsOverall: 10,
           referenceType: 'Positive',
           referencePersona: 'Customer',
           comment: 'He was very helpful and I would hire her again'
         },
         {
           firstName: 'Mihir',
           lastName: 'Chitnis',
           imageUrl: 'https://graph.facebook.com/mihir.chitnis/picture?height=75&width=75',
           overallRating: 3,
           numRatingsOverall: 7,
           referenceType: 'Neutral',
           referencePersona: 'Customer',
           comment: 'He waited for me in line for the next iPhone. But it took her quite some time to deliver it to my place!'
         },
         {
           firstName: 'Lily',
           lastName: 'Allen',
           imageUrl: 'https://graph.facebook.com/kat.martin.9809/picture?height=75&width=75',
           overallRating: 1,
           numRatingsOverall: 8,
           referenceType: 'Negative',
           referencePersona: 'Dobby',
           comment: 'I wouldn\'t hire him again!' 
         }
       ]
     },
     {
       firstName: 'Amy',
       lastName: 'Hua',
       overallRating: 4.32,
       numRatingsOverall: 30,
       numRatingsFromCustomers: 0,
       numRatingsFromDobbies: 30,
       city: 'Seattle',
       state: 'WA',
       verified: 'Yes',
       bgChecked: 'No',
       aboutMe: 'Specialization in delivery, blogging and fetching miscellaneous things quickly',
       imageUrl: 'https://avatars0.githubusercontent.com/u/3581705?s=460',
       availabilityStatus: 'Busy'
       references: [
         {
           firstName: 'Ankita',
           lastName: 'Chamela',
           imageUrl: 'https://graph.facebook.com/achowdhery/picture?height=75&width=75',
           overallRating: 5,
           numRatingsOverall: 10,
           referenceType: 'Positive',
           referencePersona: 'Customer',
           comment: 'She was very helpful and I would hire her again'
         },
         {
           firstName: 'Mihir',
           lastName: 'Chitnis',
           imageUrl: 'https://graph.facebook.com/mihir.chitnis/picture?height=75&width=75',
           overallRating: 3,
           numRatingsOverall: 7,
           referenceType: 'Neutral',
           referencePersona: 'Customer',
           comment: 'She waited for me in line for the next iPhone. But it took her quite some time to deliver it to my place!'
         },
         {
           firstName: 'Lily',
           lastName: 'Allen',
           imageUrl: 'https://graph.facebook.com/kat.martin.9809/picture?height=75&width=75',
           overallRating: 1,
           numRatingsOverall: 8,
           referenceType: 'Negative',
           referencePersona: 'Dobby',
           comment: 'I wouldn\'t hire her again!' 
         }
       ]
     },
     {
         firstName: 'Samantha',
         lastName: 'Smith',
         overallRating: 4.32,
         numRatingsOverall: 30,
         numRatingsFromCustomers: 0,
         numRatingsFromDobbies: 30,
         city: 'Seattle',
         state: 'WA',
         verified: 'Yes',
         bgChecked: 'No',
         aboutMe: 'Specialization in delivery, blogging and fetching miscellaneous things quickly',
         imageUrl: '',
         availabilityStatus: 'Off'
         references: [
           {
             firstName: 'Ankita',
             lastName: 'Chamela',
             imageUrl: 'https://graph.facebook.com/achowdhery/picture?height=75&width=75',
             overallRating: 5,
             numRatingsOverall: 10,
             referenceType: 'Positive',
             referencePersona: 'Customer',
             comment: 'She was very helpful and I would hire her again'
           },
           {
             firstName: 'Mihir',
             lastName: 'Chitnis',
             imageUrl: 'https://graph.facebook.com/mihir.chitnis/picture?height=75&width=75',
             overallRating: 3,
             numRatingsOverall: 7,
             referenceType: 'Neutral',
             referencePersona: 'Customer',
             comment: 'She waited for me in line for the next iPhone. But it took her quite some time to deliver it to my place!'
           },
           {
             firstName: 'Lily',
             lastName: 'Allen',
             imageUrl: 'https://graph.facebook.com/kat.martin.9809/picture?height=75&width=75',
             overallRating: 1,
             numRatingsOverall: 8,
             referenceType: 'Negative',
             referencePersona: 'Dobby',
             comment: 'I wouldn\'t hire her again!' 
           }
         ]
       },
       {
         firstName: 'Kim',
         lastName: 'James',
         overallRating: 4.32,
         numRatingsOverall: 30,
         numRatingsFromCustomers: 0,
         numRatingsFromDobbies: 30,
         city: 'Seattle',
         state: 'WA',
         verified: 'Yes',
         bgChecked: 'No',
         aboutMe: 'Specialization in delivery, blogging and fetching miscellaneous things quickly',
         imageUrl: '',
         availabilityStatus: 'On'
         references: [
           {
             firstName: 'Ankita',
             lastName: 'Chamela',
             imageUrl: 'https://graph.facebook.com/kjangla/picture?height=75&width=75',
             overallRating: 5,
             numRatingsOverall: 10,
             referenceType: 'Positive',
             referencePersona: 'Customer',
             comment: 'She was very helpful and I would hire her again'
           },
           {
             firstName: 'Mihir',
             lastName: 'Chitnis',
             imageUrl: 'https://graph.facebook.com/mihir.chitnis/picture?height=75&width=75',
             overallRating: 3,
             numRatingsOverall: 7,
             referenceType: 'Neutral',
             referencePersona: 'Customer',
             comment: 'She waited for me in line for the next iPhone. But it took her quite some time to deliver it to my place!'
           },
           {
             firstName: 'Lily',
             lastName: 'Allen',
             imageUrl: 'https://graph.facebook.com/kat.martin.9809/picture?height=75&width=75',
             overallRating: 1,
             numRatingsOverall: 8,
             referenceType: 'Negative',
             referencePersona: 'Dobby',
             comment: 'I wouldn\'t hire her again!' 
           }
         ]
       }
    ]
  end

  def self.profile(:profile_id)
        [
      {
       firstName: 'Sankalp',
       lastName: 'Shere',
       overallRating: 3.32,
       numRatingsOverall: 10,
       numRatingsFromCustomers: 0,
       numRatingsFromDobbies: 9,
       city: 'Seattle',
       state: 'WA',
       verified: 'Yes',
       bgChecked: 'No',
       aboutMe: 'Specialization in delivery ',
       imageUrl: 'https://graph.facebook.com/sankalpshere/picture?height=75&width=75',
       availabilityStatus: 'On'
       references: [
         {
           firstName: 'Ankita',
           lastName: 'Chamela',
           imageUrl: 'https://graph.facebook.com/achowdhery/picture?height=75&width=75',
           overallRating: 5,
           numRatingsOverall: 10,
           referenceType: 'Positive',
           referencePersona: 'Customer',
           comment: 'He was very helpful and I would hire her again'
         },
         {
           firstName: 'Mihir',
           lastName: 'Chitnis',
           imageUrl: 'https://graph.facebook.com/mihir.chitnis/picture?height=75&width=75',
           overallRating: 3,
           numRatingsOverall: 7,
           referenceType: 'Neutral',
           referencePersona: 'Customer',
           comment: 'He waited for me in line for the next iPhone. But it took her quite some time to deliver it to my place!'
         },
         {
           firstName: 'Lily',
           lastName: 'Allen',
           imageUrl: 'https://graph.facebook.com/kat.martin.9809/picture?height=75&width=75',
           overallRating: 1,
           numRatingsOverall: 8,
           referenceType: 'Negative',
           referencePersona: 'Dobby',
           comment: 'I wouldn\'t hire him again!' 
         }
       ]
     },
     {
       firstName: 'Amy',
       lastName: 'Hua',
       overallRating: 4.32,
       numRatingsOverall: 30,
       numRatingsFromCustomers: 0,
       numRatingsFromDobbies: 30,
       city: 'Seattle',
       state: 'WA',
       verified: 'Yes',
       bgChecked: 'No',
       aboutMe: 'Specialization in delivery, blogging and fetching miscellaneous things quickly',
       imageUrl: 'https://avatars0.githubusercontent.com/u/3581705?s=460',
       availabilityStatus: 'Busy'
       references: [
         {
           firstName: 'Ankita',
           lastName: 'Chamela',
           imageUrl: 'https://graph.facebook.com/achowdhery/picture?height=75&width=75',
           overallRating: 5,
           numRatingsOverall: 10,
           referenceType: 'Positive',
           referencePersona: 'Customer',
           comment: 'She was very helpful and I would hire her again'
         },
         {
           firstName: 'Mihir',
           lastName: 'Chitnis',
           imageUrl: 'https://graph.facebook.com/mihir.chitnis/picture?height=75&width=75',
           overallRating: 3,
           numRatingsOverall: 7,
           referenceType: 'Neutral',
           referencePersona: 'Customer',
           comment: 'She waited for me in line for the next iPhone. But it took her quite some time to deliver it to my place!'
         },
         {
           firstName: 'Lily',
           lastName: 'Allen',
           imageUrl: 'https://graph.facebook.com/kat.martin.9809/picture?height=75&width=75',
           overallRating: 1,
           numRatingsOverall: 8,
           referenceType: 'Negative',
           referencePersona: 'Dobby',
           comment: 'I wouldn\'t hire her again!' 
         }
       ]
     },
     {
         firstName: 'Samantha',
         lastName: 'Smith',
         overallRating: 4.32,
         numRatingsOverall: 30,
         numRatingsFromCustomers: 0,
         numRatingsFromDobbies: 30,
         city: 'Seattle',
         state: 'WA',
         verified: 'Yes',
         bgChecked: 'No',
         aboutMe: 'Specialization in delivery, blogging and fetching miscellaneous things quickly',
         imageUrl: '',
         availabilityStatus: 'Off'
         references: [
           {
             firstName: 'Ankita',
             lastName: 'Chamela',
             imageUrl: 'https://graph.facebook.com/achowdhery/picture?height=75&width=75',
             overallRating: 5,
             numRatingsOverall: 10,
             referenceType: 'Positive',
             referencePersona: 'Customer',
             comment: 'She was very helpful and I would hire her again'
           },
           {
             firstName: 'Mihir',
             lastName: 'Chitnis',
             imageUrl: 'https://graph.facebook.com/mihir.chitnis/picture?height=75&width=75',
             overallRating: 3,
             numRatingsOverall: 7,
             referenceType: 'Neutral',
             referencePersona: 'Customer',
             comment: 'She waited for me in line for the next iPhone. But it took her quite some time to deliver it to my place!'
           },
           {
             firstName: 'Lily',
             lastName: 'Allen',
             imageUrl: 'https://graph.facebook.com/kat.martin.9809/picture?height=75&width=75',
             overallRating: 1,
             numRatingsOverall: 8,
             referenceType: 'Negative',
             referencePersona: 'Dobby',
             comment: 'I wouldn\'t hire her again!' 
           }
         ]
       },
       {
         firstName: 'Kim',
         lastName: 'James',
         overallRating: 4.32,
         numRatingsOverall: 30,
         numRatingsFromCustomers: 0,
         numRatingsFromDobbies: 30,
         city: 'Seattle',
         state: 'WA',
         verified: 'Yes',
         bgChecked: 'No',
         aboutMe: 'Specialization in delivery, blogging and fetching miscellaneous things quickly',
         imageUrl: '',
         availabilityStatus: 'On'
         references: [
           {
             firstName: 'Ankita',
             lastName: 'Chamela',
             imageUrl: 'https://graph.facebook.com/kjangla/picture?height=75&width=75',
             overallRating: 5,
             numRatingsOverall: 10,
             referenceType: 'Positive',
             referencePersona: 'Customer',
             comment: 'She was very helpful and I would hire her again'
           },
           {
             firstName: 'Mihir',
             lastName: 'Chitnis',
             imageUrl: 'https://graph.facebook.com/mihir.chitnis/picture?height=75&width=75',
             overallRating: 3,
             numRatingsOverall: 7,
             referenceType: 'Neutral',
             referencePersona: 'Customer',
             comment: 'She waited for me in line for the next iPhone. But it took her quite some time to deliver it to my place!'
           },
           {
             firstName: 'Lily',
             lastName: 'Allen',
             imageUrl: 'https://graph.facebook.com/kat.martin.9809/picture?height=75&width=75',
             overallRating: 1,
             numRatingsOverall: 8,
             referenceType: 'Negative',
             referencePersona: 'Dobby',
             comment: 'I wouldn\'t hire her again!' 
           }
         ]
       }
    ][:profile_id]
  end

end
