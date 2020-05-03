#ifndef STACKSETTINGS_H
#define STACKSETTINGS_H

#include <QDialog>
#include "ResultParameters.h"
#include "CometStacking.h"
#include "PostCalibration.h"
#include "OutputTab.h"
#include "IntermediateFiles.h"
#include "AlignmentParameters.h"
#include "StackingParameters.h"

namespace Ui {
class StackSettings;
}

class StackSettings : public QDialog
{
    Q_OBJECT

public:
    explicit StackSettings(QWidget *parent = nullptr);
    ~StackSettings();

private:
    Ui::StackSettings *ui;
    ResultParameters * m_ResultParameters;
    CometStacking * m_CometStacking;
    AlignmentParameters * m_AlignmentParameters;
    IntermediateFiles * m_IntermediateFiles;
    PostCalibration * m_PostCalibration;
    OutputTab * m_OutputTab;
    StackingParameters * m_StackingParametersLight;
    StackingParameters * m_StackingParametersDark;
    StackingParameters * m_StackingParametersFlat;
    StackingParameters * m_StackingParametersBias;
};

#endif // STACKSETTINGS_H
