export type LanguageCode = 'en' | 'ar' | 'fr' | 'zh';

export interface Translations {
    common: {
        dashboard: string;
        labRooms: string;
        booking: string;
        users: string;
        groups: string;
        holidays: string;
        signOut: string;
        overview: string;
        selectLanguage: string;
        languagePreferences: string;
        report: string;
        newBooking: string;
        mainDashboard: string;
        labStatusOverview: string;
        totalUsers: string;
        equipmentCount: string;
        maintenanceCount: string;
        labUsageHistory: string;
        weeklyActivity: string;
    };
    labManagement: {
        title: string;
        tabs: {
            details: string;
            equipment: string;
            rules: string;
        };
        searchPlaceholder: string;
        addLabBtn: string;
        equipmentCount: string;
        addEquipmentBtn: string;
        equipmentList: string;
        viewDetails: string;
        addNewLab: string;
        labName: string;
        labNamePlaceholder: string;
        aboutLab: string;
        aboutLabPlaceholder: string;
        labPhoto: string;
        photoUrlPlaceholder: string;
        labLocation: string;
        locationPlaceholder: string;
        cancel: string;
        saveLab: string;
        addEquipment: string;
        equipmentName: string;
        equipmentNamePlaceholder: string;
        manufacturer: string;
        manufacturerPlaceholder: string;
        model: string;
        modelPlaceholder: string;
        serial: string;
        serialPlaceholder: string;
        calibrationDate: string;
        addToInventory: string;
        deleteConfirm: string;
        deleteEquipmentConfirm: string;
    };
}

const translations: Record<LanguageCode, Translations> = {
    en: {
        common: {
            dashboard: 'Dashboard',
            labRooms: 'Lab Rooms',
            booking: 'Booking',
            users: 'Users',
            groups: 'Groups',
            holidays: 'Holidays',
            signOut: 'Sign Out',
            overview: 'Overview',
            selectLanguage: 'Select Language',
            languagePreferences: 'Language preferences can be changed later in settings.',
            report: 'Report',
            newBooking: 'New Booking',
            mainDashboard: 'Main Dashboard',
            labStatusOverview: 'An overview of lab status and users.',
            totalUsers: 'Total Users',
            equipmentCount: 'Equipment',
            maintenanceCount: 'Maintenance',
            labUsageHistory: 'Lab Usage History',
            weeklyActivity: 'Weekly activity summary',
        },
        labManagement: {
            title: 'Labs',
            tabs: {
                details: 'Labs',
                equipment: 'Equipment',
                rules: 'Rules',
            },
            searchPlaceholder: 'Search labs...',
            addLabBtn: 'Add Lab',
            equipmentCount: 'items total',
            addEquipmentBtn: 'Add Equipment',
            equipmentList: 'Equipment List',
            viewDetails: 'View Details',
            addNewLab: 'Add New Lab Room',
            labName: 'Lab Name',
            labNamePlaceholder: 'e.g. Physics Lab 1',
            aboutLab: 'About the Lab',
            aboutLabPlaceholder: 'Enter details...',
            labPhoto: 'Lab Photo',
            photoUrlPlaceholder: 'Enter image URL (e.g., https://...)',
            labLocation: 'Lab Location',
            locationPlaceholder: 'e.g. Building A, Room 101',
            cancel: 'Cancel',
            saveLab: 'Save Lab',
            addEquipment: 'Add Equipment',
            equipmentName: 'Name',
            equipmentNamePlaceholder: 'e.g. Microscope A1',
            manufacturer: 'Manufacturer',
            manufacturerPlaceholder: 'Brand name',
            model: 'Model',
            modelPlaceholder: 'Model number',
            serial: 'Serial',
            serialPlaceholder: 'SN-XXXX',
            calibrationDate: 'Calibration Date',
            addToInventory: 'Add to Inventory',
            deleteConfirm: 'Delete this lab room?',
            deleteEquipmentConfirm: 'Delete this equipment?',
        },
    },
    ar: {
        common: {
            dashboard: 'لوحة التحكم',
            labRooms: 'غرف المختبرات',
            booking: 'الحجز',
            users: 'المستخدمون',
            groups: 'المجموعات',
            holidays: 'العطل',
            signOut: 'تسجيل الخروج',
            overview: 'نظرة عامة',
            selectLanguage: 'اختر اللغة',
            languagePreferences: 'يمكن تغيير تفضيلات اللغة لاحقًا في الإعدادات.',
            report: 'تقرير',
            newBooking: 'حجز جديد',
            mainDashboard: 'لوحة التحكم الرئيسية',
            labStatusOverview: 'نظرة عامة على حالة المختبر والمستخدمين.',
            totalUsers: 'إجمالي المستخدمين',
            equipmentCount: 'المعدات',
            maintenanceCount: 'الصيانة',
            labUsageHistory: 'سجل استخدام المختبر',
            weeklyActivity: 'ملخص النشاط الأسبوعي',
        },
        labManagement: {
            title: 'المختبرات',
            tabs: {
                details: 'المختبرات',
                equipment: 'المعدات',
                rules: 'القواعد',
            },
            searchPlaceholder: 'ابحث عن المختبرات...',
            addLabBtn: 'إضافة مختبر',
            equipmentCount: 'العناصر الإجمالية',
            addEquipmentBtn: 'إضافة معدات',
            equipmentList: 'قائمة المعدات',
            viewDetails: 'عرض التفاصيل',
            addNewLab: 'إضافة مختبر جديد',
            labName: 'اسم المختبر',
            labNamePlaceholder: 'مثال: مختبر الفيزياء 1',
            aboutLab: 'عن المختبر',
            aboutLabPlaceholder: 'أدخل التفاصيل...',
            labPhoto: 'صورة المختبر',
            photoUrlPlaceholder: 'أدخل رابط الصورة (مثال: https://...)',
            labLocation: 'موقع المختبر',
            locationPlaceholder: 'مثال: المبنى أ، الغرفة 101',
            cancel: 'إلغاء',
            saveLab: 'حفظ المختبر',
            addEquipment: 'إضافة معدات',
            equipmentName: 'الاسم',
            equipmentNamePlaceholder: 'مثال: ميكروسكوب A1',
            manufacturer: 'المصنع',
            manufacturerPlaceholder: 'اسم العلامة التجارية',
            model: 'الموديل',
            modelPlaceholder: 'رقم الموديل',
            serial: 'الرقم المسلسل',
            serialPlaceholder: 'SN-XXXX',
            calibrationDate: 'تاريخ المعايرة',
            addToInventory: 'إضافة إلى المخزون',
            deleteConfirm: 'حذف هذه غرفة المختبر؟',
            deleteEquipmentConfirm: 'حذف هذه المعدات؟',
        },
    },
    fr: {
        common: {
            dashboard: 'Tableau de bord',
            labRooms: 'Salles de labo',
            booking: 'Réservation',
            users: 'Utilisateurs',
            groups: 'Groupes',
            holidays: 'Congés',
            signOut: 'Déconnexion',
            overview: 'Aperçu',
            selectLanguage: 'Sélectionner la langue',
            languagePreferences: 'Les préférences de langue peuvent être modifiées ultérieurement dans les paramètres.',
            report: 'Rapport',
            newBooking: 'Nouvelle réservation',
            mainDashboard: 'Tableau de bord principal',
            labStatusOverview: 'Un aperçu du statut du labo et des utilisateurs.',
            totalUsers: 'Utilisateurs totaux',
            equipmentCount: 'Équipements',
            maintenanceCount: 'Maintenance',
            labUsageHistory: 'Historique d\'utilisation du labo',
            weeklyActivity: 'Résumé de l\'activité hebdomadaire',
        },
        labManagement: {
            title: 'Laboratoires',
            tabs: {
                details: 'Laboratoires',
                equipment: 'Équipements',
                rules: 'Règles',
            },
            searchPlaceholder: 'Rechercher des labos...',
            addLabBtn: 'Ajouter un labo',
            equipmentCount: 'éléments au total',
            addEquipmentBtn: 'Ajouter un équipement',
            equipmentList: 'Liste des équipements',
            viewDetails: 'Voir les détails',
            addNewLab: 'Ajouter une nouvelle salle de labo',
            labName: 'Nom du labo',
            labNamePlaceholder: 'ex. Labo de Physique 1',
            aboutLab: 'À propos du labo',
            aboutLabPlaceholder: 'Entrez les détails...',
            labPhoto: 'Photo du labo',
            photoUrlPlaceholder: 'Entrez l\'URL de l\'image (ex: https://...)',
            labLocation: 'Localisation du labo',
            locationPlaceholder: 'ex. Bâtiment A, Salle 101',
            cancel: 'Annuler',
            saveLab: 'Enregistrer le labo',
            addEquipment: 'Ajouter un équipement',
            equipmentName: 'Nom',
            equipmentNamePlaceholder: 'ex. Microscope A1',
            manufacturer: 'Fabricant',
            manufacturerPlaceholder: 'Nom de la marque',
            model: 'Modèle',
            modelPlaceholder: 'Numéro de modèle',
            serial: 'Numéro de série',
            serialPlaceholder: 'SN-XXXX',
            calibrationDate: 'Date d\'étalonnage',
            addToInventory: 'Ajouter à l\'inventaire',
            deleteConfirm: 'Supprimer cette salle de labo?',
            deleteEquipmentConfirm: 'Supprimer cet équipement?',
        },
    },
    zh: {
        common: {
            dashboard: '仪表板',
            labRooms: '实验室',
            booking: '预订',
            users: '用户',
            groups: '分组',
            holidays: '假期',
            signOut: '登出',
            overview: '概览',
            selectLanguage: '选择语言',
            languagePreferences: '语言偏好可在稍后在设置中更改。',
            report: '报告',
            newBooking: '新预订',
            mainDashboard: '主仪表板',
            labStatusOverview: '实验室状态和用户概览。',
            totalUsers: '总用户数',
            equipmentCount: '设备',
            maintenanceCount: '维护',
            labUsageHistory: '实验室使用历史',
            weeklyActivity: '每周活动摘要',
        },
        labManagement: {
            title: '实验室',
            tabs: {
                details: '实验室',
                equipment: '设备',
                rules: '规则',
            },
            searchPlaceholder: '搜索实验室...',
            addLabBtn: '添加实验室',
            equipmentCount: '项目总数',
            addEquipmentBtn: '添加设备',
            equipmentList: '设备列表',
            viewDetails: '查看详情',
            addNewLab: '添加新实验室',
            labName: '实验室名称',
            labNamePlaceholder: '例如: 物理实验室 1',
            aboutLab: '关于实验室',
            aboutLabPlaceholder: '输入详情...',
            labPhoto: '实验室照片',
            photoUrlPlaceholder: '输入图像URL (例如: https://...)',
            labLocation: '实验室位置',
            locationPlaceholder: '例如: A栋, 101室',
            cancel: '取消',
            saveLab: '保存实验室',
            addEquipment: '添加设备',
            equipmentName: '名称',
            equipmentNamePlaceholder: '例如: 显微镜 A1',
            manufacturer: '制造商',
            manufacturerPlaceholder: '品牌名称',
            model: '型号',
            modelPlaceholder: '型号号码',
            serial: '序列号',
            serialPlaceholder: 'SN-XXXX',
            calibrationDate: '校准日期',
            addToInventory: '添加到库存',
            deleteConfirm: '删除此实验室?',
            deleteEquipmentConfirm: '删除此设备?',
        },
    },
};

export const getTranslation = (lang: LanguageCode): Translations => {
    return translations[lang] || translations.en;
};
