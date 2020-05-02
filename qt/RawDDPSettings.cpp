#include "RawDDPSettings.h"
#include "ui_RawDDPSettings.h"

RawDDPSettings::RawDDPSettings(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::RawDDPSettings)
{
    ui->setupUi(this);
    m_RawFilesTab = new RawFilesTab(nullptr);
    m_FitsFilesTab = new FitsFilesTab(nullptr);
    ui->verticalLayout_4->addWidget(m_RawFilesTab);
    ui->verticalLayout_5->addWidget(m_FitsFilesTab);
    ui->tabWidget->setTabText(0, m_RawFilesTab->windowTitle());
    ui->tabWidget->setTabText(1, m_FitsFilesTab->windowTitle());
    ui->tabWidget->setCurrentIndex(0);
}

RawDDPSettings::~RawDDPSettings()
{
    delete ui;
    delete m_RawFilesTab;
    delete m_FitsFilesTab;
}
