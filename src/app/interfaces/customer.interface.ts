export interface Customer {
    tab_name_and_email: {
        first_name: String;
        second_name: String;
        surname: String;
        personal_title: String;
        nickname: String;
        man: true;
        woman: true;
        email: String;
        textarea: String;
    },
    tab_private: {
        street: String;
        place: String;
        federal_state: String;
        zip_code: Number;
        state: String;
        phone: Number;
        mobile_phone: String;
        fax: Number;
        website: String;
    },
    tab_family: {
        birthday: Number;
        anniversary: Number;
        partner: String;
        children: String;
    },
    tab_notes: {
        notes: String;
    }
}

