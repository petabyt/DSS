#include "AlignmentParameters.h"
#include "ui_AlignmentParameters.h"

AlignmentParameters::AlignmentParameters(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::AlignmentParameters)
{
    ui->setupUi(this);
    m_bFirstActivation = true;
}

AlignmentParameters::~AlignmentParameters()
{
    delete ui;
}

void AlignmentParameters::updateText()
{
    switch (m_Alignment)
    {
        case 0:
            /* Passthrough */
        case 1:
            ui->label_2->setText(QCoreApplication::translate("AlignmentParameters", "Automatic\n\nThe alignment method is automatically selected depending on the number of available stars."));
            break;
        case 2:
            ui->label_2->setText(QCoreApplication::translate("AlignmentParameters", "Bilinear Alignment\n\nThe Bilinear Alignment is used in all cases."));
            break;
        case 3:
            ui->label_2->setText(QCoreApplication::translate("AlignmentParameters", "Bisquared Alignment\n\nThe Bisquared Alignment is used when at least 25 stars are available, else the Bilinear Alignment method is used."));
            break;
        case 4:
            ui->label_2->setText(QCoreApplication::translate("AlignmentParameters", "Bicubic Alignment\n\nThe Bicubic method is used when at least 40 stars are available, then the Bisquared method is used if 25 to 39 stars are available, then the Bilinear method is used when less than 25 stars are available."));
            break;
        case 5:
            ui->label_2->setText("");
            break;
    }
}

void AlignmentParameters::onAutomaticClicked()
{
    m_Alignment = 0;
    updateText();
    emit alignmentChanged();
}

void AlignmentParameters::onBilinearClicked()
{
    m_Alignment = 2;
    updateText();
    emit alignmentChanged();
}

void AlignmentParameters::onBisquaredClicked()
{
    m_Alignment = 3;
    updateText();
    emit alignmentChanged();
}

void AlignmentParameters::onBicubicClicked()
{
    m_Alignment = 4;
    updateText();
    emit alignmentChanged();
}

void AlignmentParameters::onNoAlignemtnClicked()
{
    m_Alignment = 5;
    updateText();
    emit alignmentChanged();
}